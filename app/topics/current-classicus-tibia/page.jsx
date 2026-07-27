import CurrentClassicusTibiaKeywordPage, { generateMetadata } from './current-classicus-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentClassicusTibiaKeywordPage />;
}
