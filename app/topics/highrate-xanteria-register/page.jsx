import HighrateXanteriaRegisterKeywordPage, { generateMetadata } from './highrate-xanteria-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateXanteriaRegisterKeywordPage />;
}
