import EvoRegisterFranceKeywordPage, { generateMetadata } from './evo-register-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoRegisterFranceKeywordPage />;
}
