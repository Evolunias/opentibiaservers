import OfficialXanteriaOpenTibiaKeywordPage, { generateMetadata } from './official-xanteria-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialXanteriaOpenTibiaKeywordPage />;
}
