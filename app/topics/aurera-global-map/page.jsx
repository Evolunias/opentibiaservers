import AureraGlobalMapKeywordPage, { generateMetadata } from './aurera-global-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AureraGlobalMapKeywordPage />;
}
