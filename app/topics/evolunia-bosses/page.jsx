import EvoluniaBossesKeywordPage, { generateMetadata } from './evolunia-bosses';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoluniaBossesKeywordPage />;
}
