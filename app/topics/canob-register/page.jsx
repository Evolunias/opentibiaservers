import CanobRegisterKeywordPage, { generateMetadata } from './canob-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CanobRegisterKeywordPage />;
}
