import CustomMapStatusUsaKeywordPage, { generateMetadata } from './custom-map-status-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapStatusUsaKeywordPage />;
}
