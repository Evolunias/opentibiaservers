import LowrateXanteriaRegisterKeywordPage, { generateMetadata } from './lowrate-xanteria-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateXanteriaRegisterKeywordPage />;
}
