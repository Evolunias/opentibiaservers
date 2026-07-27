import OxygenotClientKeywordPage, { generateMetadata } from './oxygenot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OxygenotClientKeywordPage />;
}
