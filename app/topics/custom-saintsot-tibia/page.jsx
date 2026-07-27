import CustomSaintsotTibiaKeywordPage, { generateMetadata } from './custom-saintsot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomSaintsotTibiaKeywordPage />;
}
