import RealeraSwedenServerKeywordPage, { generateMetadata } from './realera-sweden-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealeraSwedenServerKeywordPage />;
}
