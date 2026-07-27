import PaceraTibiaKeywordPage, { generateMetadata } from './pacera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PaceraTibiaKeywordPage />;
}
