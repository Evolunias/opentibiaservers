import OxygenotOtKeywordPage, { generateMetadata } from './oxygenot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OxygenotOtKeywordPage />;
}
