import CustomDemolidoresTibiaKeywordPage, { generateMetadata } from './custom-demolidores-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomDemolidoresTibiaKeywordPage />;
}
