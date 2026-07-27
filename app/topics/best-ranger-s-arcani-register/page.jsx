import BestRangerSArcaniRegisterKeywordPage, { generateMetadata } from './best-ranger-s-arcani-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestRangerSArcaniRegisterKeywordPage />;
}
