import CurrentArchlightTibiaKeywordPage, { generateMetadata } from './current-archlight-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentArchlightTibiaKeywordPage />;
}
