import CustomOlderaTibiaKeywordPage, { generateMetadata } from './custom-oldera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomOlderaTibiaKeywordPage />;
}
