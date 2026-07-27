import CurrentUnlineTibiaKeywordPage, { generateMetadata } from './current-unline-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentUnlineTibiaKeywordPage />;
}
