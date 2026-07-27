import NoResetThorniaRegisterKeywordPage, { generateMetadata } from './no-reset-thornia-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetThorniaRegisterKeywordPage />;
}
