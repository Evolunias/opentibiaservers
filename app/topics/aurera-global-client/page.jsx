import AureraGlobalClientKeywordPage, { generateMetadata } from './aurera-global-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AureraGlobalClientKeywordPage />;
}
