import CustomElderaClientKeywordPage, { generateMetadata } from './custom-eldera-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomElderaClientKeywordPage />;
}
