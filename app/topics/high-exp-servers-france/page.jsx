import HighExpServersFranceKeywordPage, { generateMetadata } from './high-exp-servers-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpServersFranceKeywordPage />;
}
