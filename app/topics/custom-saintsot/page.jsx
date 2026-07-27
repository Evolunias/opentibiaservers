import CustomSaintsotKeywordPage, { generateMetadata } from './custom-saintsot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomSaintsotKeywordPage />;
}
