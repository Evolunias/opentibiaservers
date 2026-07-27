import ImperianicTibiaKeywordPage, { generateMetadata } from './imperianic-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ImperianicTibiaKeywordPage />;
}
