import CustomUnlineTibiaKeywordPage, { generateMetadata } from './custom-unline-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomUnlineTibiaKeywordPage />;
}
