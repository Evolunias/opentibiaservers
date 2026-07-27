import CustomOriginaltibiaKeywordPage, { generateMetadata } from './custom-originaltibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomOriginaltibiaKeywordPage />;
}
