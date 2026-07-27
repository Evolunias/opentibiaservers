import CustomMapStatusUkKeywordPage, { generateMetadata } from './custom-map-status-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapStatusUkKeywordPage />;
}
