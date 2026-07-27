import HighExpClientFranceKeywordPage, { generateMetadata } from './high-exp-client-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpClientFranceKeywordPage />;
}
