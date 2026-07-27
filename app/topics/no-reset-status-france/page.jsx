import NoResetStatusFranceKeywordPage, { generateMetadata } from './no-reset-status-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetStatusFranceKeywordPage />;
}
