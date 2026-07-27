import LowExpStatusFranceKeywordPage, { generateMetadata } from './low-exp-status-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpStatusFranceKeywordPage />;
}
