import CustomSaintsotOpenTibiaKeywordPage, { generateMetadata } from './custom-saintsot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomSaintsotOpenTibiaKeywordPage />;
}
