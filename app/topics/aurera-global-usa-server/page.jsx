import AureraGlobalUsaServerKeywordPage, { generateMetadata } from './aurera-global-usa-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AureraGlobalUsaServerKeywordPage />;
}
