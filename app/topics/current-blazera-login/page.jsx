import CurrentBlazeraLoginKeywordPage, { generateMetadata } from './current-blazera-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentBlazeraLoginKeywordPage />;
}
