import ImperianicMapKeywordPage, { generateMetadata } from './imperianic-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ImperianicMapKeywordPage />;
}
