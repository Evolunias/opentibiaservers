import CustomTibijkaTibiaKeywordPage, { generateMetadata } from './custom-tibijka-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibijkaTibiaKeywordPage />;
}
