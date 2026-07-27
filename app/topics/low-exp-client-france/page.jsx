import LowExpClientFranceKeywordPage, { generateMetadata } from './low-exp-client-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpClientFranceKeywordPage />;
}
