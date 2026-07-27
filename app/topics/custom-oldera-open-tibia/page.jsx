import CustomOlderaOpenTibiaKeywordPage, { generateMetadata } from './custom-oldera-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomOlderaOpenTibiaKeywordPage />;
}
