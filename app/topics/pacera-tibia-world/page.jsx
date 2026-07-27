import PaceraTibiaWorldKeywordPage, { generateMetadata } from './pacera-tibia-world';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PaceraTibiaWorldKeywordPage />;
}
