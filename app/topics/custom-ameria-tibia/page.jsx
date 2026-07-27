import CustomAmeriaTibiaKeywordPage, { generateMetadata } from './custom-ameria-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomAmeriaTibiaKeywordPage />;
}
