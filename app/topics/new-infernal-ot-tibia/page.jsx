import NewInfernalOtTibiaKeywordPage, { generateMetadata } from './new-infernal-ot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewInfernalOtTibiaKeywordPage />;
}
