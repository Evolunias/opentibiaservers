import ImperianicRealMapKeywordPage, { generateMetadata } from './imperianic-real-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ImperianicRealMapKeywordPage />;
}
