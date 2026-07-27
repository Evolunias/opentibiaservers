import AureraGlobalRealMapKeywordPage, { generateMetadata } from './aurera-global-real-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AureraGlobalRealMapKeywordPage />;
}
