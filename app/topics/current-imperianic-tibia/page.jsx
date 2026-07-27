import CurrentImperianicTibiaKeywordPage, { generateMetadata } from './current-imperianic-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentImperianicTibiaKeywordPage />;
}
