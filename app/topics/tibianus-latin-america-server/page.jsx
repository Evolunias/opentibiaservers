import TibianusLatinAmericaServerKeywordPage, { generateMetadata } from './tibianus-latin-america-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibianusLatinAmericaServerKeywordPage />;
}
