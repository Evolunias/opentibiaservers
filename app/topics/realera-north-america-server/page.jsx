import RealeraNorthAmericaServerKeywordPage, { generateMetadata } from './realera-north-america-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealeraNorthAmericaServerKeywordPage />;
}
