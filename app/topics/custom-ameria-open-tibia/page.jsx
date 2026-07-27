import CustomAmeriaOpenTibiaKeywordPage, { generateMetadata } from './custom-ameria-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomAmeriaOpenTibiaKeywordPage />;
}
