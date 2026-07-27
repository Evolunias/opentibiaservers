import HighExpServerListFranceKeywordPage, { generateMetadata } from './high-exp-server-list-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpServerListFranceKeywordPage />;
}
