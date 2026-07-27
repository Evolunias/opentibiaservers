import NewAlasteraOpenTibiaKeywordPage, { generateMetadata } from './new-alastera-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewAlasteraOpenTibiaKeywordPage />;
}
