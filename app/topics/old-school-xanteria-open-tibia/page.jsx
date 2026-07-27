import OldSchoolXanteriaOpenTibiaKeywordPage, { generateMetadata } from './old-school-xanteria-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolXanteriaOpenTibiaKeywordPage />;
}
