import RealeraPvpKeywordPage, { generateMetadata } from './realera-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealeraPvpKeywordPage />;
}
