import AureraGlobalGermanyServerKeywordPage, { generateMetadata } from './aurera-global-germany-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AureraGlobalGermanyServerKeywordPage />;
}
