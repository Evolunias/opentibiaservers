import LowExpServerFranceKeywordPage, { generateMetadata } from './low-exp-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpServerFranceKeywordPage />;
}
